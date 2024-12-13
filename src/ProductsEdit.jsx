export function ProductsEdit(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdate(props.product, params);
    event.target.reset();
  };
  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {props.product.name}</p>
      <p>
        Image: <img src={props.product.primary_image_url} alt="" />
      </p>
      <p>Description: {props.product.description}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.product.name} name="name" type="text" />
        </div>
        <div>
          Image: <input defaultValue={props.product.product_image_url} name="product_image_url" type="text" />
        </div>
        <div>
          description: <input defaultValue={props.product.description} name="description" type="text" />
        </div>

        <button type="submit">Update</button>
      </form>
    </div>
  );
}
