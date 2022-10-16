<script>
  const placeholder = ["oi", "olá"]
</script>

<form class="form">
  <input type="text" placeholder={placeholder[1]} class="input">
  <button>BUSCAR</button>
</form>

<style>

  .form {
    margin: 0 auto;
    align-items: center;
  }

  .input {
    background: url('/public/images/bx_search-alt.svg');
    font-family: var(--font-poppins);
    background-repeat: no-repeat;
    background-color: #2E3038;
    background-position: left;
    background-position-x: 1rem;
    background-size: 2.2rem;
    border-radius: 0.5rem;
    border-style: none;
    padding: 1rem 4rem;
    font-weight: 700;
    font-size: 1rem;
    width: 40rem;
  }

  input:focus {
    outline: none;
    color: #ffff;
  }

  button {
    background-color: var(--primary-color);
    padding: 1.2rem 2.3rem;
    border-radius: 0.5rem;
    border-style: none;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    color: #fff;
  }

  button:hover {
    filter: brightness(0.9);
  }

  button:active {
    transform: scale(.9);
  }

</style>