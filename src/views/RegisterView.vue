<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-card class="px-4" title="Register new item" subtitle="Register new item">

                    <v-text-field v-model="Title" :counter="10" class="my-5" label="Title post" required
                        hide-details></v-text-field>
                    <v-text-field v-model="Body" :counter="10" class="my-5" label="Description post" hide-details
                        required></v-text-field>
                    <v-text-field v-model="UserId" class="my-5" label="User Id" hide-details required></v-text-field>

                    <v-card-actions>
                        <v-btn :disabled="enableCreateButton" @click="CreateItem()" color="indigo-darken-4">create</v-btn>
                    </v-card-actions>
                </v-card>

            </v-col>
        </v-row>

        <v-snackbar :color="SnackbarColor" v-model="SnackbarShow">
            {{ SnackbarText }}
        </v-snackbar>

    </v-container>
</template>

<script>
import { createPost } from "@/services/requests/posts";

export default {
    data: () => ({
        Title: "",
        Body: "",
        UserId: "",
        SnackbarShow: false,
        SnackbarText: "",
        SnackbarColor: "",
    }),
    computed:{
        enableCreateButton(){
            return !(this.Body && this.Title && this.UserId);
        }
    },
    methods: {
        async CreateItem() {
            const post = {
                title: this.Title,
                body: this.Body,
                userId: this.UserId,
            };

            const statusResponse = await createPost(post);
            this.HandleSnackbar(statusResponse);
        },
        HandleSnackbar(status){
            if(status === 201) {
                this.SnackbarText = "Item created successfully";
                this.SnackbarColor = "success";
                this.SnackbarShow = true;
                return;
            }
            this.SnackbarText = "Something wrong, retry later!";
            this.SnackbarColor = "red-darken-2";
            this.SnackbarShow = true;
        }
    }
};
</script>