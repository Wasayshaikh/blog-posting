export const getPostComment = async (slug: string|undefined) => {
    try {
        const response = await fetch("https://laravel-api.wasayshaikh.com/api/comments/" + slug, {
            method: "GET",
            headers: { "Content-Type": "application/json" },

        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null); // in case response is not JSON
            throw new Error(errorData?.message || `Server Error: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("API error:", error.message);
            throw new Error(`Failed to fetch trending posts: ${error.message}`);
        } else {
            console.error("Unknown error:", error);
            throw new Error("An unexpected error occurred while fetching posts.");
        }
    }

}

export const putPostComment = async (commentData: { content: string, post_slug: string, user_name: string|undefined }, token: string|null) => {
    try {
        const response = await fetch("https://laravel-api.wasayshaikh.com/api/add-comments", {
            method: "POST",
            headers: { "Content-Type": "application/json", "Authorization": `Bearer ${token}` },
            body: JSON.stringify(commentData)

        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => null); // in case response is not JSON
            throw new Error(errorData?.message || `Server Error: ${response.status}`);
        }

        const data = await response.json();
        return data;

    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error("API error:", error.message);
            throw new Error(`Failed to fetch trending posts: ${error.message}`);
        } else {
            console.error("Unknown error:", error);
            throw new Error("An unexpected error occurred while fetching posts.");
        }
    }

}