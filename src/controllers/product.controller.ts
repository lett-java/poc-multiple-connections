import { Request, Response } from "express";
import { Repository } from "typeorm";
import { Product } from "../entity/db-one/product";
import { connectionDbOne } from "../index";

let productRepository: Repository<Product>;

export const getProducts = async (req: Request, res: Response): Promise<Response> => {
    await geraRepository();
    const products = await productRepository.find();
        
    return res.json(products);
}

export const createProduct = async (req: Request, res: Response): Promise<Response> => {
    await geraRepository();
    const newProduct = await productRepository.create(req.body);
    const result = await productRepository.save(newProduct);

    return res.json(result);
}

export const getProduct = async (req: Request, res: Response): Promise<Response> => {
    await geraRepository();
    const product = await productRepository.findOne(req.params.id);

    if (!product) {
        return res.status(404).json({message: 'Product not found.'});
    }
    
    return res.json(product);
}

export const updateProduct = async (req: Request, res: Response): Promise<Response> => {
    await geraRepository();
    const product = await productRepository.findOne(req.params.id);
    
    if (!product) {
        return res.status(404).json({message: 'Product not found.'});
    }

    productRepository.merge(product, req.body);
    const result = await productRepository.save(product);

    return res.json(result);
}

export const deleteProduct = async (req: Request, res: Response): Promise<Response> => {
    geraRepository();
    const product = await productRepository.findOne(req.params.id);

    if (!product) {
        return res.status(404).json({message: 'Product not found.'});    
    }
    
    await productRepository.delete(req.params.id);

    return res.status(200).json({message: 'Deleted successfully'});
}

async function geraRepository() {
    await connectionDbOne.then(
        async (connectDbOne) => {
            productRepository = connectDbOne.getRepository(Product);
        }
    );
}
