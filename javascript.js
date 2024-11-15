const inputelement = document.getElementById('input');
        const outputelement = document.getElementById('output');

        function changeuppercase(){
            outputelement.value = inputelement.value.toUpperCase();
        }
        function changelowercase(){
            outputelement.value = inputelement.value.toLowerCase();
        }
        function countingwords(){
            const words = inputelement.value.split(" ").length;
            outputelement.value = `total words: ${words}`;
        }
        function charactercount(){
           outputelement.value = inputelement.value.length;
        }