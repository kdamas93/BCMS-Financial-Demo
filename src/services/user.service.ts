import { UserRepository } from '../repositories/user.repository';
import bcrypt from "bcrypt";

export class UserService {

    private userRepository = new UserRepository();

    async getUsers() {
        return this.userRepository.findAll();
    }

    async getUserById(id: number) {
        return this.userRepository.findById(id);
    }

    async createUser(
        name: string,
        email: string,
        password: string
    ) {
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        return this.userRepository.create(
            name,
            email,
            hashedPassword
        );
    }

    async updateUser(
        id: number,
        name: string,
        email: string,
        password: string
    ) {
        return this.userRepository.update(
            id,
            name,
            email,
            password
        );
    }

    async deleteUser(id: number) {
        return this.userRepository.delete(id);
    }

}