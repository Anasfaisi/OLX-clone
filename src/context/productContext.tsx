import { createContext, useContext, useState, ReactNode } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { toast } from "react-toastify";
import { db } from "../firebase/setup";



export interface Product {
  name: string;
  price: string;
  description: string;
  place: string;
  date: string;
  imageUrl: string;
}

interface ProductContextType {
  uploadImage: (image: File) => Promise<string>;
  addProduct: (product: Product) => Promise<void>;
}

 export const ProductContext = createContext<ProductContextType | undefined>(undefined);



export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);
  console.log(loading);
  
  const uploadImage = async (image: File): Promise<string> => {
    setLoading(true);
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "olx-clone");
    data.append("cloud_name", "dufb78hcb");

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dufb78hcb/image/upload",
        {
          method: "POST",
          body: data,
        }
      );
      const file = await res.json();
      setLoading(false);
      return file.secure_url;
    } catch (error) {
      setLoading(false);
      console.error("Error uploading image:", error);
      toast.error("Image upload failed!");
      return "";
    }
  };






  const addProduct = async (product: Product) => {
    try {
      await addDoc(collection(db, "products"), product);
      toast.success("Ad listed successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      toast.error("Failed to upload product!");
    }
  };

  return (
    <ProductContext.Provider value={{ uploadImage, addProduct }}>
      {children}
    </ProductContext.Provider>
  );
};


export async function getData() {
  try {
    const querySnapshot = await getDocs(collection(db, "products")); 
    const data:Product[] = []

    querySnapshot.forEach((doc) => {
      data.push(doc.data() as Product ); 
    });

    return data; 
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}








export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};