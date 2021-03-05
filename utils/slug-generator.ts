export const generateSlug = (data: string) => {
    return data.split(" ").join("-")
}