interface OptionsProps {
    method: string;
    headers: {
        'Content-Type': string;
    }
}

export const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    credentials: "include",
    cache: "no-store"
}

export const fetchData = async (url: string, options: OptionsProps) => {
    const res = await fetch(url, options)
    const data = await res.json()
    return data
}