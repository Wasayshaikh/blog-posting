export const getPostComment = async (postId:{postId:number}) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/get-post", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(postId)

        });
        if (!response.ok) {
            const errorData = await response.json();

        }
        const data = await response.json();
        return data;
    } catch (error: any) {

    }

}

export const putPostComment = async (postId:{postId:number}) => {
    try {
        const response = await fetch("http://127.0.0.1:8000/api/get-post", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body:JSON.stringify(postId)

        });
        if (!response.ok) {
            const errorData = await response.json();

        }
        const data = await response.json();
        return data;
    } catch (error: any) {

    }

}