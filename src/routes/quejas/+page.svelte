
	<h1>Hola... muak</h1>

	<form action="quejas">
		<input type="text">
		<label for="nombre">nombre</label>
	</form>

	<style>

		form{
			display: flex;
		}
		input{
			position:relative;
			outline: none;
			background: transparent;
			border: 0.5px solid #000000;
		}

		 label{
			color: black;
			position: absolute;
			transform: translateY(-10%);
			pointer-events: none;
			left: 20px;
			top: 81px;
			transition: .3s;
		}

		input:focus ~ label{
			top: 72px;
			left: 15px;
			font-size: 16px;
			background:white;
		}
	</style>