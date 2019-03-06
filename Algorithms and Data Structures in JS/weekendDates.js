
        

        function testResults(form){
          var startVac = form.datebox.value;
          var TestVar = form.inputbox.value;
          var startVac = form.datebox.value;
          //var ends = form.datebox2.value;
          var noDays = form.noDaysbox.value;
          alert ("You typed: " + TestVar +" "+ startVac+" " + noDays);
          let start = moment(startVac).format();
          let end = moment(startVac).add(noDays, 'd').format();
          alert('this is the enddate '+end);
          alert('this is the startdate '+start);
          alert('this is a specific day '+moment(startVac).day());
          if (moment(start).day()===4){
            alert ('this is a thursday')
          }
          console.log("start is ", start)
          console.log("end is " , end)
          
          }