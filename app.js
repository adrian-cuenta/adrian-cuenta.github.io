class Product{
   constructor(name,price,year){
        this.name = name
        this.price = price
        this.year = year
   } 
}

class UI{
    addProduct(product){
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Product</strong>: ${product.name} -
                    <strong>Price</strong>: ${product.price} - 
                    <strong>Year</strong>: ${product.year}
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
    productList.appendChild(element);
    this.resetform()
  }

    resetform(){
        document.getElementById('product-form').reset()
    }

    deleteProduct(element){
        if(element.name === "delete"){
            element.parentElement.parentElement.parentElement.remove()
            this.showMessage('Producto Eliminado Satisfactoriamente','danger')
        }
    }

    showMessage(message, cssClass){
        const div = document.createElement("div");
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
    
        // Show in The DOM
        const container = document.querySelector(".container");
        const app = document.querySelector("#App");
    
        // Insert Message in the UI
        container.insertBefore(div, app);

        setTimeout(function () {
            document.querySelector(".alert").remove();
          }, 3000);
    }
}

//Dom Events

document.getElementById('product-form').addEventListener('submit',(e)=>{
    const name = document.getElementById('name').value
    const price = document.getElementById('price').value
    const year = document.getElementById('year').value

    const product = new Product(name,price,year)
    
    console.log(product)

    const ui = new UI()
    if(name === '' || year === '' || price === ''){
        return ui.showMessage('Complete los campos','danger')
    }
    ui.addProduct(product)
    ui.resetform()
    ui.showMessage('Producto Agregado Satisfactoriamente!','success')


    e.preventDefault()
})


document.getElementById('product-list').addEventListener('click',(e)=>{
    const ui = new UI()
    ui.deleteProduct(e.target)
})