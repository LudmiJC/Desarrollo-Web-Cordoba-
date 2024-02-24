const mp = new MercadoPago('TEST-91afbba7-43df-410c-91e6-847f0b2099e7',{
    locale: "es-AR",
}); 
document.getElementById("checkout-btn").addEventListener("click", async () =>{
 try {
    const orderData ={
    title: document.querySelector(".name").innerText,
    quantity: 1,
    price: 100,
 };

 const response = await fetch("http://localhost:3000/create_preference",{
    method: "POST",
    headers: {
     "Content-type": "aplication/json",
    },
    body: JSON.stringify(orderData),
  });

  const preference = await response.json()
  createCheckoutButton(preference.id);
    } catch (error){
        alert("error :(");
    }
});
const createCheckoutButton = (preferenceId) => {
    const bricksBuilder = mp.bricks();

    const renderComponent = async () => {
        if(window.checkoutButton) window.checkoutButton.unmount();
        
     bricksBuilder.create("wallet", "wallet_container", {
      initialization: {
        preferenceId: preferenceId,
    },
  });
};
 renderComponent();
};