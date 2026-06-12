import bcrypt from "bcrypt";
import { UserRepository } from "../repositories/user.repository";
import { generateToken } from "./jwt";

export class AuthService {

    private userRepository = new UserRepository();

    login = async (
        email: string,
        password: string
    ) => {

        const user = await this.userRepository.getUserByEmail(email);

        if (!user) {
            throw new Error("Invalid credentials");
        }

        const passwordMatch = await bcrypt.compare(
            password,
            user.password
        );

        if (!passwordMatch) {
            throw new Error("Invalid credentials");
        }

        const token = generateToken(user.id);

        return {
            token
        };
    };

}