<script>
  let a = " Hello world!!"

  $: if(a === "Hello world!!") {
     a = "oi";
  }
</script>

<h1>{a}</h1>