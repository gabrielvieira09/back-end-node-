import { createCustomer, getAllCustomers, getCustomerById, updateCustomer, deleteCustomer } from "../services/customersService.js"

export const getCustomers = async(req, res) => {
   try {
      const customers = await getAllCustomers();
      res.json(customers)
   }
   catch (error) {
      res.status(500).json({
         error:"Erro ao buscar os clientes",
      });
   }
}

export const createCustomerController = async(req, res) => {
   try{
      const newCustomer = await createCustomer(req.body);
      res.status(201).json(newCustomer)
   } catch (error) {
      res.status(500).json ({error: "Erro ao criar o cliente"});
   }
}

export const getCustomer = async(req, res) => {
   try{
      const customer = await getCustomerById(req.params.id)
      if(customer){
         res.json(customer);
      }else {
         res.status(500).json({error: "Cliente não encontrado"})
      }
   }catch (error){
      res.status(500).json({error: "Erro ao buscar o cliente"})
   }
}

export const updateCustomerController = async (req, res) => {
   try {
      const customer = await updateCustomer(req.params.id, req.body);
      res.json(customer);
   }catch (error){
      res.status(500).json({error: "Erro ao atualizar o Cliente"})
   }
}

export const deleteCustomerController = async (req, res) => {
   try {
      await deleteCustomer(req.params.id);
      res.status(204).send();
   }catch (error){
      res.status(500).json({error: "Erro ao deletar o Cliente"})
   }
}