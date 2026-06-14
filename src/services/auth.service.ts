import bcrypt from "bcrypt";

import { UserRepository }
    from "../repositories/user.repository";

import { generateToken }
    from "../auth/jwt";

export class AuthService {

    private userRepository =
        new UserRepository();

    async login(
        email: string,
        password: string
    ) {

        const user =
            await this.userRepository.getUserByEmail(
                email
            );

        if (!user) {

            throw new Error(
                "Invalid credentials"
            );

        }

        const passwordMatch =
            await bcrypt.compare(
                password,
                user.password
            );

        if (!passwordMatch) {

            throw new Error(
                "Invalid credentials"
            );

        }

        const token =
            generateToken(
                user.id
            );

        return {

            token,

            user: {

                id: user.id,
                name: user.name,
                email: user.email

            }

        };

    }

    async register(
        name: string,
        email: string,
        password: string
    ) {

        const existingUser =
            await this.userRepository.getUserByEmail(
                email
            );

        if (existingUser) {

            throw new Error(
                "Email already exists"
            );

        }

        const hashedPassword =
            await bcrypt.hash(
                password,
                10
            );

        const user =
            await this.userRepository.create(

                name,
                email,
                hashedPassword

            );

        const token =
            generateToken(
                user.id
            );

        return {

            token,

            user

        };

    }

}