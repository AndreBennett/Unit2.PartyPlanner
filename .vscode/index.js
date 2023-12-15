const app = document.getElementById("app");
const submit = document.getElementById("submit");

const deleteEvent = async (e) => {
    const user_id = e.target.id;
    try {
        const response = await fetch(
            `https://fsa-crud-2aa9294fe819.herokuapp.com/api/2311-fsa-et-web-ft-sf/events/${user_id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        const result = await response;
        console.log("Success:", result);
        render(); 
    } catch (error) {
        console.error('Error:', error);
    }
};

const render = async () => {
    try {
      const response = await fetch(
        "https://fsa-crud-2aa9294fe819.herokuapp.com/api/2311-fsa-et-web-ft-sf/events",
        {
            headers:{
                "Content-Type": 'application/json',
            },
        }
      );

      const result = await response.json();
      result.forEach((element) => {
        const div = document.createElement("div");
        div.style.margin = "5%";
  
        const pName = document.createElement("p");
        pName.innerHTML = `Name: ${element.name}`;
        div.appendChild(pName);
  
        const pDescription = document.createElement("p");
        pAge.innerHTML = `Description: ${element.Description}`;
        div.appendChild(pDescription);
  
        const pDate = document.createElement("p");
        pColour.innerHTML = `Date: ${element.date}`;
        div.appendChild(pDate);

        const pLocation = document.createElement("p");
        pAge.innerHTML = `Location: ${element.Location}`;
        div.appendChild(pLocation);
  
        const button = document.createElement("button");
        button.innerHTML = "Delete";
        button.id = element._id;
        button.addEventListener("click", deleteEvent);
        div.appendChild(button);
  
        app.appendChild(div);
      });
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  
  render();

  const addEvent = async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const location = document.getElementById("location").value;
  
    const obj = {
      name,
      description,
      date,
      location,
    };

    try {
        const response = await fetch("https://fsa-crud-2aa9294fe819.herokuapp.com/api/2311-fsa-et-web-ft-sf/events", {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(obj),
        });
    
        const result = await response.json();
        console.log("Success:", result);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    
    submit.addEventListener("click", addEvent);