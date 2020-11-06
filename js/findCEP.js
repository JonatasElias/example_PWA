$(document).ready(function() {
    
    $('.btn-find').click(function(e){
        e.preventDefault()

        var cep = $('#CEP').val()

        var find = `http://viacep.com.br/ws/${cep}/json/`

        console.log(find)

        $.ajax({
            dataType: 'JSON',
            type: 'GET',
            assync: true,
            url: find,
            success: function(dados) {            
                $('#logradouro').val(dados.logradouro)
                $('#bairro').val(dados.bairro)
                $('#localidade').val(dados.localidade)
                $('#uf').val(dados.uf)
            }
        })
    })
})