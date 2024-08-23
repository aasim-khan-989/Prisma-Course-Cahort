import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


async function inserData(email:string,firstName:string,lastName:string,password:string){
    const res = await prisma.user.create(
        {
            data:{
                email,
                firstName,
                lastName,
                password
            }
        }
    )
    console.log(res)

}

// inserData("aasim@gmail","dwd","dwd","prisma")

type myparms={
    firstName:string,
    lastName:string
}


async function updateUser(userName:string,obj:myparms){
     const res = await   prisma.user.update({
        where:{email:userName},
        data:obj
    })
    console.log(res)
}
const obj:myparms={
    firstName:"updatedfirstName",
    lastName:"updatedLastName"


}
// updateUser("aasim@gmail",obj)

// get user

async function getUser(userName:string){
    const res = await prisma.user.findFirst(
        {
            where:{
                email:userName

            }
        }
    )
    console.log(res)
}

getUser("aasim@gmail")