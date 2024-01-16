import { baseURL } from "@/api/baseURL";

/**
 * Fetches all posts from the specified API endpoint.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of post objects.
 * @throws {Error} If there is an error during the fetch or if the HTTP status is not okay.
 */
export const getAllPosts = async () => {
  try {
    const response = await fetch(`${baseURL}/posts`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    throw new Error("Error fetching posts:", error);
  }
};

/**
 * Creates a new post using the provided payload.
 *
 * @param {Object} payload - The data for the new post.
 * @returns {Promise<Object>} A promise that resolves to the response data of the created post.
 * @throws {Error} If there is an error during the fetch or if the HTTP status is not okay.
 */
export const createPost = async ({ payload }) => {
  try {
    const response = await fetch(`${baseURL}/posts`, {
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
};

/**
 * Updates an existing post with the provided payload and postId.
 *
 * @param {Object} payload - The updated data for the post.
 * @param {number} postId - The ID of the post to be updated.
 * @returns {Promise<Object>} A promise that resolves to the response data of the updated post.
 * @throws {Error} If there is an error during the fetch or if the HTTP status is not okay.
 */
export const updatePost = async ({ payload }, postId) => {
  try {
    const response = await fetch(`${baseURL}/posts/${postId}`, {
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
};

/**
 * Deletes a post with the specified postId.
 *
 * @param {number} postId - The ID of the post to be deleted.
 *
 * @returns {Promise<Object>} A promise that resolves to an
 *  object indicating the success of the deletion and the deleted data.
 *
 * @throws {Error} If there is an error during the fetch,
 * if the HTTP status is not okay, or if the deletion is not successful.
 */
export const deletePost = async (postId) => {
  try {
    const response = await fetch(`${baseURL}/posts/${postId}`, {
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
};
