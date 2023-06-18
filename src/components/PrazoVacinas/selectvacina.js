import dados from "../../vacinas.json";
//import dadosVAC from "../../dados.json";

function selectvacina() {
    
    var faixaetaria = this.state.value();
    if( faixaetaria === "vacinasrn") {

        <select class="pesquisa-faixa-etaria" type="checkbox" value={this.state.value} onChange={this.handleChange}>
        <option value="" disabled selected>Selecione a faixa etária:</option>
        {
          dados.titulo.vacinasrn.map((v,i)=> <option value={i}> {v.vacinasrn} </option>
        )}
  </select>
  }
  }

  export default selectvacina();