'use client'
import addProductTodb from "@/actions/prodactions";
import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes";
import { useState } from "react";

export default function Addprobutton() {


    const [title , setTitle] = useState("");
    const [description , setDescription] = useState("");
    const [imageurl  , setImageurl] = useState("");
    const [price  , setPrice] = useState(0);


    async function handlesubmit(){

        // const parsedPrice = Number.parseFloat(price);

        const data = {
            title ,
            description ,
            image_url : imageurl 
        }

        const res = await addProductTodb(data);
        if(res.success ){
            alert("data saved successfully");
        }
        else{
            alert("oops something went wrong");
        }

    }

    return (
        <Dialog.Root>
            <Dialog.Trigger>
                <Button>Edit profile</Button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
                <Dialog.Title>Edit profile</Dialog.Title>
                <Dialog.Description size="2" mb="4">
                    Make changes to your profile.
                </Dialog.Description>

                <Flex direction="column" gap="3">
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            Title
                        </Text>
                        <TextField.Root
                            placeholder="Enter your Title"
                            value={title}
                            onChange={(e)=>{setTitle(e.target.value)}}
                        />
                    </label>
                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            description
                        </Text>
                        <TextField.Root
                           
                            placeholder="Enter your email"
                            value={description}
                            onChange={(e)=>{setDescription(e.target.value)}}
                        />
                    </label>

                    <label>
                        <Text as="div" size="2" mb="1" weight="bold">
                            imageurl
                        </Text>
                        <TextField.Root
                         
                            placeholder="Enter your imageurl"
                            value={imageurl}
                            onChange={(e)=>{setImageurl(e.target.value)}}
                        />
                    </label>
                    
                </Flex>

                <Flex gap="3" mt="4" justify="end">
                    <Dialog.Close>
                        <Button variant="soft" color="gray">
                            Cancel
                        </Button>
                    </Dialog.Close>
                    <Dialog.Close>
                        <Button onClick={handlesubmit}>Save</Button>
                    </Dialog.Close>
                </Flex>
            </Dialog.Content>
        </Dialog.Root>

    )
}