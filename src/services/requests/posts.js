import { baseURL } from "@/api/baseURL";

export default class RequestPostService {
  constructor() {
    this.baseURL = baseURL;
  }

  async getAllPosts() {
    try {
      const response = await fetch(`${this.baseURL}/posts`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return response.json();
    } catch (error) {
      throw new Error("Error fetching posts:", error);
    }
  }

  async createPost({ payload }) {
    try {
      const response = await fetch(`${this.baseURL}/posts`, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      return response.status;
    } catch (error) {
      throw new Error("Error creating post:", error);
    }
  }

  async updatePost({ payload }, postId) {
    try {
      const response = await fetch(`${this.baseURL}/posts/${postId}`, {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      const json = await response.json();
      return json;
    } catch (error) {
      throw new Error("Error updating post:", error);
    }
  }

  async deletePost(postId) {
    try {
      const response = await fetch(`${this.baseURL}/posts/${postId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const deletedData = await response.json();
      return { success: true, data: deletedData };
    } catch (error) {
      throw new Error("Error deleting post:", error);
    }
  }
}
