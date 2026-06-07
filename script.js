function volume_sphere() {
    //Write your code here
  const radius=document.getElementById("radius")
	 const volume=document.getElementById("volume")
	const btn=document.getElementById("submit")

btn.addEventListener("click", ()=>{

	const radval=radius.value
	let vol= "NaN"
let r=radval
	if(radval>1)
	{
		vol= (4 / 3) * Math.PI * r ** 3;
	}

  volume.value = vol.toFixed(4);
	
})



















	
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
