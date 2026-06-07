function volume_sphere() {
    const radius = document.getElementById("radius");
    const volume = document.getElementById("volume");
    const form = document.getElementById("MyForm");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let r = parseFloat(radius.value);

        if (isNaN(r) || r < 0) {
            volume.value = "NaN";
            return;
        }

        let vol = (4 / 3) * Math.PI * Math.pow(r, 3);
        volume.value = vol.toFixed(4);
    });
}

volume_sphere();