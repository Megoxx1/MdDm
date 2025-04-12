<script>
  function addMemory() {
    const title = document.getElementById("memoryTitle").value;
    const description = document.getElementById("memoryDescription").value;
    const fileInput = document.getElementById("memoryImage");
    const container = document.getElementById("memoriesContainer");

    if (!fileInput.files.length || !title || !description) {
      alert("Please fill in all fields and choose an image.");
      return;
    }

    const reader = new FileReader();
    reader.onload = function (e) {
      const div = document.createElement("div");
      div.className = "memory";
      div.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <img src="${e.target.result}" alt="${title}" />
      `;
      container.prepend(div); // Add at the top
    };
    reader.readAsDataURL(fileInput.files[0]);

    // Clear form
    document.getElementById("memoryTitle").value = "";
    document.getElementById("memoryDescription").value = "";
    fileInput.value = "";
  }
</script>
