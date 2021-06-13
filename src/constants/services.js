export async function getStaff(page) {
    const url = `https://reqres.in/api/users?per_page=${page}`;
    return fetch(url)
        .then((res) => res.json());
}