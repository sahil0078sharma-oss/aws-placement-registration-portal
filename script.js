async function registerStudent(){

const data = {
    name: document.getElementById("name").value,
    branch: document.getElementById("branch").value,
    cgpa: document.getElementById("cgpa").value
};

const response = await fetch(
"https://2h0uni2r3m.execute-api.us-east-1.amazonaws.com/register",
{
    method:"POST",
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify(data)
}
);

const result = await response.json();

alert(result.message);
}