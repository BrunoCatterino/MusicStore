import express from "express";
import createUser from "../api/user/routes"
import deleteUser from "../api/user/routes"
import userRouter from "../api/user/routes";
import loginUser from "../api/user/routes"
import editUser from "../api/user/routes";
import productRouter from "../api/product/routes";
import deleteProduct from "../api/product/routes";
import createProduct from "../api/product/routes";
import editProduct from "../api/product/routes";
import cartRouter from "../api/cart/routes";

const router = express.Router();

router.use("/users", userRouter);
router.use("/products", productRouter);
router.use("/cart", cartRouter);

router.post("/register", createUser)
router.post("/login", loginUser);
router.post("/addProduct", createProduct)

router.delete("/deleteUser/:id", deleteUser);
router.delete("/deleteProduct/:id", deleteProduct);

router.put("/editProduct/:id", editProduct);
router.put("/editUser/:id", editUser);
export default router;
