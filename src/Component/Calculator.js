import React, { useState } from "react";

function Calculator() {
	const [result, setResult] = useState([]);
	const [finalresult, setfinalresult] = useState("");

	const handleclick = (e) => {
		const value = result.concat(e.target.name).toString();
		setResult(value);
	};
	const clearAll = () => {
		setResult("");
	};
	const backspace = () => {
		setResult(result.slice(0, -1));
	};

	const evaluate = () => {
        try {
            
            setResult(eval(result).toString());
            setfinalresult(eval(result).toString());
        } catch (error) {
            setResult("Error")
        }
	};
	const clearFinalResult = () => {
		setfinalresult("");
	};
	return (
		<>
			<div className="container text-center">
				<div className="keypad w-50 m-auto my-5">
					<div className="row ">
						<div className="col-lg-8 mx-auto calci rounded-2 ">
							<h1 className="text-center text-light fw-bold my-3">
								Calculator
							</h1>

							<form action="">
								<input type="text" value={result} className="rounded" />
								<label className="mb-3">
									<span>{finalresult}</span>{" "}
									<span onClick={clearFinalResult}>clear</span>
								</label>
							</form>
							<div className="row text-center g-3 ">
								<div className="col-lg-6 col-md-6 col-sm-6 col-xs-3 ">
									<button
										id="clear"
										className="shadow  bg-dark rounded"
										onClick={clearAll}>
										Clear
									</button>
								</div>
								<div className="col-3">
									<button
										id="backspace"
										className="shadow  bg-dark rounded"
										onClick={backspace}>
										C
									</button>
								</div>
								<div className="col-3">
									<button
										name="/"
										className="shadow  bg-dark rounded opr"
										onClick={handleclick}>
										/
									</button>
								</div>
								<div className="col-3">
									<button
										name="7"
										className="shadow  bg-dark rounded"
										onClick={handleclick}>
										7
									</button>
								</div>
								<div className="col-3">
									<button
										name="8"
										className="shadow  bg-dark rounded"
										onClick={handleclick}>
										8
									</button>
								</div>
								<div className="col-3">
									<button
										name="9"
										className="shadow  bg-dark rounded"
										onClick={handleclick}>
										9
									</button>
								</div>
								<div className="col-3">
									<button
										name="*"
										className="shadow  bg-dark rounded opr"
										onClick={handleclick}>
										×
									</button>
								</div>
								<div className="col-3">
									<button
										name="4"
										className="shadow  bg-dark rounded"
										onClick={handleclick}>
										4
									</button>
								</div>
								<div className="col-3">
									<button
										name="5"
										className="shadow  bg-dark rounded"
										onClick={handleclick}>
										5
									</button>
								</div>
								<div className="col-3">
									<button
										name="6"
										className="shadow  bg-dark rounded"
										onClick={handleclick}>
										6
									</button>
								</div>
								<div className="col-3">
									<button
										name="-"
										className="shadow  bg-dark rounded opr"
										onClick={handleclick}>
										{" "}
										-{" "}
									</button>
								</div>

								<div className="col-3">
									<button
										name="1"
										className="shadow  bg-dark rounded"
										onClick={handleclick}>
										1
									</button>
								</div>
								<div className="col-3">
									<button
										name="2"
										className="shadow  bg-dark rounded"
										onClick={handleclick}>
										2
									</button>
								</div>
								<div className="col-3">
									<button
										name="3"
										className="shadow  bg-dark rounded"
										onClick={handleclick}>
										3
									</button>
								</div>
								<div className="col-3">
									<button
										name="+"
										className="shadow  bg-dark rounded opr"
										onClick={handleclick}>
										+
									</button>
								</div>
								<div className="col-3">
									<button
										name="0"
										className="shadow  bg-dark rounded"
										onClick={handleclick}>
										0
									</button>
								</div>
								<div className="col-3">
									<button
										name="."
										className="shadow  bg-dark rounded opr"
										onClick={handleclick}>
										.
									</button>
								</div>
								<div className="col-lg-6 col-md-6 col-sm-6">
									<button
										name=""
										className="shadow  bg-dark rounded opr"
										onClick={evaluate}>
										=
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Calculator;
