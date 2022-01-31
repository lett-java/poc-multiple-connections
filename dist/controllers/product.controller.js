"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.getProduct = exports.createProduct = exports.getProducts = void 0;
const product_1 = require("../entity/db-one/product");
const index_1 = require("../index");
let productRepository;
const getProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield geraRepository();
    const products = yield productRepository.find();
    return res.json(products);
});
exports.getProducts = getProducts;
const createProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield geraRepository();
    const newProduct = yield productRepository.create(req.body);
    const result = yield productRepository.save(newProduct);
    return res.json(result);
});
exports.createProduct = createProduct;
const getProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield geraRepository();
    const product = yield productRepository.findOne(req.params.id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found.' });
    }
    return res.json(product);
});
exports.getProduct = getProduct;
const updateProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield geraRepository();
    const product = yield productRepository.findOne(req.params.id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found.' });
    }
    productRepository.merge(product, req.body);
    const result = yield productRepository.save(product);
    return res.json(result);
});
exports.updateProduct = updateProduct;
const deleteProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    geraRepository();
    const product = yield productRepository.findOne(req.params.id);
    if (!product) {
        return res.status(404).json({ message: 'Product not found.' });
    }
    yield productRepository.delete(req.params.id);
    return res.status(200).json({ message: 'Deleted successfully' });
});
exports.deleteProduct = deleteProduct;
function geraRepository() {
    return __awaiter(this, void 0, void 0, function* () {
        yield index_1.connectionDbOne.then((connectDbOne) => __awaiter(this, void 0, void 0, function* () {
            productRepository = connectDbOne.getRepository(product_1.Product);
        }));
    });
}
