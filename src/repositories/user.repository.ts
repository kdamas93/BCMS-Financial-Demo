import { prisma } from '../config/prisma';

export class UserRepository {

    async findAll() {
        return prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true
            }
        });
    }

    async findById(id: number) {
        return prisma.user.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true
            }
        });
    }

    async create(
        name: string,
        email: string,
        password: string
    ) {
    
        return prisma.user.create({
            data: {
                name,
                email,
                password
            },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true
            }
        });
    
    }

    async update(
        id: number,
        name: string,
        email: string,
        password: string
    ) {
    
        return prisma.user.update({
            where: {
                id
            },
            data: {
                name,
                email,
                password
            },
            select: {
                id: true,
                name: true,
                email: true,
                createdAt: true,
                updatedAt: true
            }
        });
    
    }

    async delete(id: number) {
        return prisma.user.delete({
            where: {
                id
            }
        });
    }

    getUserByEmail = async (
        email: string
    ) => {
    
        console.log(
            "DATABASE_URL exists:",
            !!process.env.DATABASE_URL
        );
    
        console.log(
            "JWT_SECRET exists:",
            !!process.env.JWT_SECRET
        );
    
        console.log(
            "Searching user:",
            email
        );
    
        try {
    
            const user =
                await prisma.user.findUnique({
    
                    where: {
                        email
                    }
    
                });
    
            console.log("User found:", !!user);
    
            return user;
    
        } catch (error) {
    
            console.error(
                "Prisma error:",
                error
            );
    
            throw error;
    
        }
    
    };

}