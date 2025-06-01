const presentYear = new Date().getFullYear();
export const inputs = [
    {
        label: "Title",
        name: "title",
        type: "text",
    },
    {
        label: "Description",
        name: "description",
        type: "text",
    },
    {
        label: "Rating",
        name: "rating",
        type: "number",
        min: 0,
        max: 10,
    },
    {
        label: "Year",
        name: "year",
        type: "number",
        min: 1900,
        max: presentYear,
    },
    {
        label: "Director",
        name: "director",
        type: "text",
    },
    {
        label: "Duration",
        name: "duration",
        type: "text",
    },
    {
        label: "Language",
        name: "language",
        type: "text",
    },
    {
        label: "Genre (comma separated)",
        name: "genre",
        type: "text",
    },
    {
        label: "Cast (comma separated)",
        name: "cast",
        type: "text",
    }
]