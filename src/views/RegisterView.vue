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
import RequestPostService from "@/services/requests/posts";
import SnackbarService from "@/services/handlers/handleSnackbar";

export default {
    data: () => ({
        Title: "",
        Body: "",
        UserId: "",
        SnackbarShow: false,
        SnackbarText: "",
        SnackbarColor: "",
        ServiceInstace: null
    }),
    computed: {
        enableCreateButton() {
            return !(this.Body && this.Title && this.UserId);
        }
    },
    async mounted() {
        /**
         * Represents an instance of the RequestPostService class for handling HTTP requests related to posts.
         * @type {RequestPostService}
         * @name ServiceInstance
         * @instance
         */
        this.ServiceInstace = new RequestPostService();
    },
    methods: {
        
        /**
         * Asynchronously creates a new item (post) using the provided data and updates the Snackbar based on the HTTP status response.
         * @returns {Promise<void>} A promise that resolves when the item creation and Snackbar handling are completed.
         * @throws {Error} If there is an error during the item creation or Snackbar handling.
         */
        async CreateItem() {
            const post = {
                title: this.Title,
                body: this.Body,
                userId: this.UserId,
            };

            const statusResponse = await this.ServiceInstace.createPost(post);
            this.HandleSnackbar(statusResponse);
        },
        /**
         * Handles Snackbar display based on the provided HTTP status.
         * @param {number} status - The HTTP status code returned from the API.
         * @returns {void}
         */
        HandleSnackbar(status) {
            const snackbar = SnackbarService.handleSnackbar(status);

            this.SnackbarText = snackbar.text;
            this.SnackbarColor = snackbar.color;
            this.SnackbarShow = snackbar.show;
        },
    }
};
</script>