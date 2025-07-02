export const getTrendingPost = async () => {
    try {
        const response = await fetch("https://laravel-api.wasayshaikh.com/api/get-trending-posts", {
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
};
export const getNewPost = async () => {
     try {
        const response = await fetch("https://laravel-api.wasayshaikh.com/api/get-new-posts", {
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
export const getSinglePost = async (slug:string) => {
     try {
        const response = await fetch("https://laravel-api.wasayshaikh.com/api/posts/"+slug, {
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