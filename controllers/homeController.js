angular
    .module('hackathon')
    .controller('HomeController', ['$scope', '$location', 'helperService', '$cookies', '$window', '$http', 'Facebook', HomeController])
    .config(['$routeProvider', routes]);

function routes($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'HomeController',
            controllerAs: 'Home'
        });
}

function HomeController($scope, $location, helperService, $cookies, $window, $http, Facebook) {
    var vm = this;
    vm.startTerms = false;
    vm.form = {};
    vm.form.halfSuperior = false;
    vm.form.superior = false;
    vm.form.technician = false;
    vm.loading = false;
    vm.form.isSuperior = false;
    vm.form.uuid = guid();
    $scope.base64Picture = "";
    $scope.fullScreen = true;
    $scope.muted = true;
    $scope.zIndex = '0';
    $scope.playInfo = {};
    $scope.pausePlay = true;
    $scope.showFace = true;
    if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
        $scope.showFace = false;
    }

    $scope.IntentLogin = IntentLogin;

    function IntentLogin() {
        Facebook.getLoginStatus(function(response) {
            if (response.status == 'connected') {
                $scope.logged = true;
                $scope.me();
            } else
                $scope.login();
        });
    };


    $scope.login = login;

    function login() {
        Facebook.login(function(response) {
            if (response.status == 'connected') {
                $scope.logged = true;
                $scope.me();
            }

        });
    };
    $scope.me = me;

    function me() {
        Facebook.api('/me?fields=name,email,age_range,gender,locale,picture', function(response) {
            $scope.$apply(function() {
                $scope.user = response;
                //console.log(response);
                vm.form.name = $scope.user.name;
                vm.form.email = $scope.user.email;
                vm.form.picture = "https://graph.facebook.com/" + $scope.user.id + "/picture?type=large";
            });
        });
    };

    $scope.$on('Facebook:statusChange', function(ev, data) {
        //console.log('Status: ', data);
        if (data.status == 'connected') {
            $scope.$apply(function() {
              //  console.log("logou");
                $scope.me();
            });
        } else {
            $scope.$apply(function() {
              //  console.log("Não Logou");
            });
        }
    });

    $('.datepicker').pickadate({
        selectMonths: true,
        selectYears: 100,
        format: 'dd/mm/yyyy'
    });
    $('select').material_select();
    this.spotify = false;
    this.step = 0;
    this.eventDate = "Prova de seleção: 03/12/2016 - 10AM";
    this.terms = "Conhece nosso regulamento? Clique Aqui";
    this.bubbles = [{
        text: "'Foi uma experiência única!'",
        color: "white",
        textColor: "black-text",
        dataDelay: "0.1s"
    }, {
        text: "'Me senti acolhida no ambiente de trabalho da Johnson'",
        color: "red",
        textColor: "white-text",
        dataDelay: "0.5s"
    }, {
        text: "'Foi um dia com muitas emoções e aprendizado'",
        color: "blue",
        textColor: "white-text",
        dataDelay: "0.3s"
    }, {
        text: "'Ganhei muita maturidade em 10 horas'",
        color: "green",
        textColor: "white-text",
        dataDelay: "0.6s"
    }, {
        text: "'Melhor combinação: código e pizza'",
        color: "purple",
        textColor: "white-text",
        dataDelay: "0.9s"
    }, {
        text: "",
        color: "",
        textColor: "",
        dataDelay: "0.9s"
    }];

    vm.form.sexo = null;
    this.peopleIconsPath = helperService.peopleIconsPath
    this.peopleIcons = [{
        fileName: "icon1.png",
        for: 3,
        delay: "0.2s",
        selected: 0
    }, {
        fileName: "icon2.png",
        for: 3,
        delay: "0.5s",
        selected: 0
    }, {
        fileName: "icon3.png",
        for: 3,
        delay: "0.9s",
        selected: 0
    }, {
        fileName: "icon4.png",
        for: 3,
        delay: "0.3s",
        selected: 0
    }, {
        fileName: "icon5.png",
        for: 3,
        delay: "0.4s",
        selected: 0
    }, {
        fileName: "icon6.png",
        for: 3,
        delay: "0.8s",
        selected: 0
    }, {
        fileName: "icon7.png",
        for: 3,
        delay: "0.7s",
        selected: 0
    }, {
        fileName: "icon8.png",
        for: 3,
        delay: "0.2s",
        selected: 0
    }, {
        fileName: "icon9.png",
        for: 3,
        delay: "0.1s",
        selected: 0
    }, {
        fileName: "icon10.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon11.png",
        for: 3,
        delay: "0.5s",
        selected: 0
    }, {
        fileName: "icon12.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon13.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon14.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon15.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon16.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon17.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon18.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon19.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon20.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon21.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon22.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon23.png",
        for: 3,
        delay: "1s",
        selected: 0
    }, {
        fileName: "icon24.png",
        for: 3,
        delay: "1s",
        selected: 0
    }];

    this.peopleIconSelection = peopleIconSelection

    function peopleIconSelection(peopleIcon) {
        if (peopleIcon.selected == 0) {
            peopleIcon.selected = 1;
        } else {
            peopleIcon.selected = 0;
        }
    }

    this.spotifyChange = spotifyChange;

    function spotifyChange() {
        if (this.spotify) {
            this.spotify = false;
        } else {
            this.spotify = true;
        }
    }

    vm.changeImage = changeImage;

    function changeImage() {
        vm.form.picture = "data:image/png;base64," + $scope.base64Picture.base64;
    }

    vm.submitSignupForm = submitSignupForm;
    $scope.droppedLike = [];
    $scope.droppedDislike = [];
    $scope.droppedMain = [];
    $scope.onDropLike = function(data, evt) {
        if ($scope.droppedLike.length > 2) {
            showMessage("Só pode selecionar 3");
            return;
        }
        var result = $.grep($scope.droppedLike, function(e) {
            return e.fileName == data.fileName;
        });
        if (result.length > 0) {
            showMessage("Você já adicionou este ícone");
            return;
        }
        var index = $scope.droppedLike.indexOf(data);
        $scope.droppedLike.push(data);
        //console.log($scope.droppedLike);
    }
    $scope.onDropDislike = function(data, evt) {
        if ($scope.droppedDislike.length > 2) {
            showMessage("Só pode selecionar 3");
            return;
        }
        var result = $.grep($scope.droppedDislike, function(e) {
            return e.fileName == data.fileName;
        });
        if (result.length > 0) {
            showMessage("Você já adicionou este ícone");
            return;
        }
        var index = $scope.droppedDislike.indexOf(data);
        $scope.droppedDislike.push(data);
        //console.log($scope.droppedDislike);
    }
    $scope.onDropMain = function(data, evt) {
        if ($scope.droppedMain.length > 0) {
            showMessage("Só pode selecionar 1");
            return;
        }
        var index = $scope.droppedMain.indexOf(data);
        $scope.droppedMain.push(data);
        //console.log($scope.droppedMain);

    }
    $scope.removeDroppedLike = function(data) {
        for (var i = 0; i < $scope.droppedLike.length; i++) {
            if ($scope.droppedLike[i].fileName == data.fileName) {
                $scope.droppedLike.splice(i, 1);
            }
        }
    }
    $scope.removeDroppedDislike = function(data) {
        for (var i = 0; i < $scope.droppedDislike.length; i++) {
            if ($scope.droppedDislike[i].fileName == data.fileName) {
                $scope.droppedDislike.splice(i, 1);
            }
        }
    }
    $scope.removeDroppedMain = function(data) {
        for (var i = 0; i < $scope.droppedMain.length; i++) {
            if ($scope.droppedMain[i].fileName == data.fileName) {
                $scope.droppedMain.splice(i, 1);
            }
        }
    }

    vm.nextStep = nextStep;
    vm.addStep = addStep;
    vm.nameError = "Oops.. Parece que há um problema com seu nome";
    vm.emailError = "Oops.. Parece que há um problema com seu e-mail";
    vm.dateError = "Oops.. Parece que há um problema com sua data de nascimento";
    vm.freeTextError = "Oops.. Parece que há um problema com sua descrição";
    vm.halfSuperiorError = "* Esta vaga é somente para candidatos cursando até a metade do curso superior ou que não tenham iniciado ainda";
    vm.generalError = "Por favor preencha todos os campos";
    vm.sexoError = "Por favor selecione seu sexo (Masculino/Feminino)";
    vm.startTermsError = "Você precisa aceitar os termos de uso";
    vm.technicianError = "Você precisa de formação técnica";
    vm.message = "";

    function nextStep() {
        switch (vm.step) {
            case 0:
                if (vm.startTerms == null || vm.startTerms == false) {
                    vm.showMessage(vm.startTermsError);
                    return;
                } else {
                    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
                    if (isChrome) {} else {
                        vm.showMessage("Recomendamos a utilização do navegador Google Chrome para fazer sua inscrição");
                    }

                }
                vm.addStep();
                break;
            case 1:
                if (vm.form.sexo == null) {
                    vm.showMessage(vm.sexoError);
                    return;
                }
                vm.addStep();
                break;
            case 2:
                if (vm.form.name == null || vm.form.name.length < 5) {
                    vm.showMessage(vm.nameError)
                    return;
                }
                if (vm.form.email == null || vm.form.email.length < 5) {
                    vm.showMessage(vm.emailError)
                    return;
                }
                if (vm.form.date == null || vm.form.date.length < 4) {
                    vm.showMessage(vm.dateError)
                    return;
                }
                vm.addStep();
                break;
            case 3:
                if (vm.form.name == null || vm.form.name.length < 5) {
                    vm.showMessage(vm.nameError)
                    return;
                }
                if (vm.form.email == null || vm.form.email.length < 5) {
                    vm.showMessage(vm.emailError)
                    return;
                }
                if (vm.form.date == null || vm.form.date.length < 4) {
                    vm.showMessage(vm.dateError)
                    return;
                }
                if (vm.form.freeText == null || vm.form.freeText.length < 5) {
                    vm.showMessage(vm.freeTextError)
                    return;
                }
                vm.addStep();
                break;
            case 4:
                if (vm.form.halfSuperior == true && vm.form.halfSuperior == false) {
                    vm.showMessage(vm.halfSuperiorError)
                    return;
                }
                if (vm.form.superior == true) {
                    vm.showMessage(vm.halfSuperiorError)
                    return;
                }
                if (vm.form.technician == false || vm.form.technician == null) {
                    vm.showMessage(vm.technicianError)
                    return;
                }
                if (vm.form.testPlace == null || vm.form.testPlace == "0") {
                    vm.showMessage(vm.generalError)
                    return;
                }
                if ((vm.form.technician == true && vm.form.school == null) || (vm.form.technician == true && vm.form.school == "")) {
                    vm.showMessage(vm.generalError)
                    return;
                }
                if ((vm.form.technician == true && vm.form.course == null) || (vm.form.technician == true && vm.form.course == "")) {
                    vm.showMessage(vm.generalError)
                    return;
                }
                if ((vm.form.isSuperior == true && vm.form.halfSuperior == false) || (vm.form.isSuperior == true && vm.form.halfSuperior == null)) {
                    vm.showMessage(vm.halfSuperiorError)
                    return;
                }

                vm.submitSignupForm();
                //vm.addStep();
                break;
            default:
                vm.addStep();
                break;
        }
    }

    function addStep() {
        $window.scrollTo(0, 0);
        vm.step = vm.step + 1;
    }



    function submitSignupForm(form) {
        vm.loading = true;
        vm.form.droppedLike = $scope.droppedLike;
        vm.form.droppedDislike = $scope.droppedDislike;
        vm.form.droppedMain = $scope.droppedMain;
        var url = "https://ldchackathon.herokuapp.com/api/add";

        var filteredObj = {};
        angular.forEach(vm.form, function(val, key) {
            if (val != null) {
                if (typeof(val) === "object") {
                    if (Object.keys(val).length > 0) {
                        filteredObj[key] = val;
                    }
                } else if (typeof(val) === "string") {
                    if (val.trim() !== "") {
                        filteredObj[key] = val;
                    }
                } else {
                    filteredObj[key] = val;
                }
            }
        });
        filteredObj.registerDate = new Date();
        $http({
            method: 'POST',
            url: url,
            data: filteredObj,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(function(res) {
          //  console.log(res);
            vm.data = res;
          //  console.log(vm.data);
            if (vm.data.data.success) {
                vm.addStep();
            } else {
                vm.showMessage(vm.data.data.message);
            }
            vm.loading = false;
        }, function(err) {
            vm.loading = false;
          //  console.log('error', err);
            vm.showMessage("Oops.. Algo deu errado, tente novamente. (Dica: Só permitimos acesso por HTTPS para maior segurança)");
        });
    }

    vm.showPolicy = showPolicy;
    vm.showTerms = showTerms;
    vm.showFaq = showFaq;

    function showPolicy() {
        $('#modalPolicy').openModal();
    }

    function showTerms() {
        $('#modalTerms').openModal();
    }

    function showFaq() {
        $('#modalFaq').openModal();
    }


    vm.showMessage = showMessage;

    function showMessage(message) {
        vm.message = message;
        $('#modalLog').openModal();
        //$window.alert(message);
    }



    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
}
