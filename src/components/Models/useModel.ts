import { useContext } from "react";
import ModelsContext from "./ModelsContext";


export default function useModel(modelName: string){
  const {registerModel, unregisteredModel, getModelByName} = useContext(ModelsContext)
}