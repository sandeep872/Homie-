

window.onload = function(){
        
    //Check File API support
    if(window.File && window.FileList && window.FileReader)
    {
        var filesInput = document.getElementById("files");
        
        filesInput.addEventListener("change", function(event){
            
            var files = event.target.files; //FileList object
            var output = document.getElementById("result");
            
            for(var i = 0; i< files.length; i++)
            {
                var file = files[i];
                
                //Only pics
                if(!file.type.match('image'))
                  continue;
                
                var picReader = new FileReader();
                
                picReader.addEventListener("load",function(event){
                    
                    var picFile = event.target;
                    
                    var div = document.createElement("div");
                    
                    div.innerHTML = "<img class='thumbnail' src='" + picFile.result + "'" +
                            "title='" + picFile.name + "'/> <a href='javascript:void(0);' class='remove_pict'>X</a>";
                    
                    output.insertBefore(div,null);   
                    div.children[1].addEventListener("click", function(event){
                       div.parentNode.removeChild(div);
                    });         
                
                });
                
                 //Read the image
                picReader.readAsDataURL(file);
            }                               
           
        });
    }
    else
    {
        console.log("Your browser does not support File API");
    }
}

jQuery(document).ready(function() {
jQuery('.menu-btn').on('click', function () {
    jQuery('#bs-navbar').toggleClass('slide-menu')
	jQuery('.navbar-header').toggleClass('active-menu')
});

jQuery(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >=100) {
        jQuery(".header").addClass("fixed-header");
    } else {
        jQuery(".header").removeClass("fixed-header");
    }
});

              var owl = $('.latest-insights-slider');
              owl.owlCarousel({
                stagePadding: 50,
                margin:25,
                nav: true,
                loop: true,
				dots: false,
                responsive: {
                  0: {
                    items: 1
                  },
                  600: {
                    items: 2
                  },
                  1000: {
                    items: 3
                  }
                }
              })
			  
			  var owl = $('.property-slider-01');
              owl.owlCarousel({
                margin:0,
                nav: true,
                loop: true,
				dots: false,
                responsive: {
                  0: {
                    items: 1
                  }
                  
                }
              })
jQuery('.check1').click(function() {
    jQuery('.tenant').toggleClass("active");
});
jQuery('.check2').click(function() {
    jQuery('.landlord').toggleClass("active");
});	 
jQuery('.visible-pw').click(function() {
    jQuery('.visible-pw').toggleClass("active");
});	



$(function() {
    // Multiple images preview in browser
    var imagesPreview = function(input, placeToInsertImagePreview) {

        if (input.files) {
            var filesAmount = input.files.length;

            for (i = 0; i < filesAmount; i++) {
                var reader = new FileReader();

                reader.onload = function(event) {
                    $($.parseHTML('<img>')).attr('src', event.target.result).appendTo(placeToInsertImagePreview);
                }

                reader.readAsDataURL(input.files[i]);
            }
        }

    };

    $('#gallery-photo-add').on('change', function() {
        imagesPreview(this, 'div.gallery');
    });
});




});



$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: false, 
        dots: false,
        loop: true,
        responsiveRefreshRate: 200,
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: false,
            nav: false,
            smartSpeed: 200,
            slideSpeed: 500,
			margin:10,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
	
	
});

$(document).ready(function(){       
   $('#myModal').modal('show');
    }); 


$(document).ready(function(){
    var $cat = $('select[name=country]'),
        $items = $('select[name=items]');

    $cat.change(function(){
        var $this = $(this).find(':selected'),
            rel = $this.attr('rel'),
            $set = $items.find('option.' + rel);

        if ($set.size() < 0) {
            $items.hide();
            return;
        }

        $items.show().find('option').hide();

        $set.show().first().prop('selected', true);
    });

	//copy phone number to coupon

	$('#phone').change(function() {
    $('#coupon').val($(this).val());
});

//reset the forms

 resetForms();
function resetForms() {
    for (i = 0; i < document.forms.length; i++) {
        document.forms[i].reset();
    }
}
jQuery('.ellipsis').click(function() {
    jQuery('.chat-menu').toggleClass("show-menu");
});
jQuery('.attach-btn').click(function() {
    jQuery('.attached-menu').toggleClass("show-attached-menu");
});
jQuery('.notification-menu-btn').click(function() {
    jQuery('.notification-menu').toggleClass("show-notification-menu");
});


});
$(document).ready(function() {
jQuery(function () {
  jQuery("#datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true
  }).datepicker('update', new Date());
});	
	
});

	//Phone format

	$.fn.ForceNumericOnly =
function()
{
    return this.each(function()
    {
        $(this).keydown(function(e)
        {
            var key = e.charCode || e.keyCode || 0;
            // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
            // home, end, period, and numpad decimal
            return (
                key == 8 || //backspace
                key == 9 || //tab
                key == 13 ||  //enter
                key == 46 ||  //delete
                key == 110 ||  //decimal point
                key == 190 ||  //period
                (key >= 35 && key <= 40) ||  //end,home,arrows,insert,delete
                (key >= 48 && key <= 57) ||  //numbers
                (key >= 96 && key <= 105));  //numpad 0-9
        });
    });
};
	$("#phone").ForceNumericOnly();




	$('#btnContact').click(function(e) {
var sCountry = $('#countries').val();
var sPhone = $('#phone').val();

if ( sCountry == "Country" || $("#pincode").val()== "Code" || sPhone.length == 0 ) {
$(".error-message").show();
$(".error-message").fadeOut(2000);
$(".success-message").hide();
e.preventDefault();
}

else if( sPhone.length <= 9 )
{
$(".error-phone").show();
$(".error-phone").fadeOut(2000);
$(".success-message").hide();
e.preventDefault();
}

else {
$(".success-message").show();
$(".error-message").hide();
$(".success-message").fadeOut(5000);
}
});

/*
Object of countries based on
http://en.wikipedia.org/wiki/List_of_IOC_country_codes
*/
function countriesDropdown(container){
	var countries = {
		AFG: "Afghanistan",
		ALB: "Albania",
		ALG: "Algeria",
		AND: "Andorra",
		ANG: "Angola",
		ANT: "Antigua and Barbuda",
		ARG: "Argentina",
		ARM: "Armenia",
		ARU: "Aruba",
		ASA: "American Samoa",
		AUS: "Australia",
		AUT: "Austria",
		AZE: "Azerbaijan",
		BAH: "Bahamas",
		BAN: "Bangladesh",
		BAR: "Barbados",
		BDI: "Burundi",
		BEL: "Belgium",
		BEN: "Benin",
		BER: "Bermuda",
		BHU: "Bhutan",
		BIH: "Bosnia and Herzegovina",
		BIZ: "Belize",
		BLR: "Belarus",
		BOL: "Bolivia",
		BOT: "Botswana",
		BRA: "Brazil",
		BRN: "Bahrain",
		BRU: "Brunei",
		BUL: "Bulgaria",
		BUR: "Burkina Faso",
		CAF: "Central African Republic",
		CAM: "Cambodia",
		CAN: "Canada",
		CAY: "Cayman Islands",
		CGO: "Congo",
		CHA: "Chad",
		CHI: "Chile",
		CHN: "China",
		CIV: "Cote d'Ivoire",
		CMR: "Cameroon",
		COD: "DR Congo",
		COK: "Cook Islands",
		COL: "Colombia",
		COM: "Comoros",
		CPV: "Cape Verde",
		CRC: "Costa Rica",
		CRO: "Croatia",
		CUB: "Cuba",
		CYP: "Cyprus",
		CZE: "Czech Republic",
		DEN: "Denmark",
		DJI: "Djibouti",
		DMA: "Dominica",
		DOM: "Dominican Republic",
		ECU: "Ecuador",
		EGY: "Egypt",
		ERI: "Eritrea",
		ESA: "El Salvador",
		ESP: "Spain",
		EST: "Estonia",
		ETH: "Ethiopia",
		FIJ: "Fiji",
		FIN: "Finland",
		FRA: "France",
		FSM: "Micronesia",
		GAB: "Gabon",
		GAM: "Gambia",
		GBR: "Great Britain",
		GBS: "Guinea-Bissau",
		GEO: "Georgia",
		GEQ: "Equatorial Guinea",
		GER: "Germany",
		GHA: "Ghana",
		GRE: "Greece",
		GRN: "Grenada",
		GUA: "Guatemala",
		GUI: "Guinea",
		GUM: "Guam",
		GUY: "Guyana",
		HAI: "Haiti",
		HKG: "Hong Kong",
		HON: "Honduras",
		HUN: "Hungary",
		INA: "Indonesia",
		IND: "India",
		IRI: "Iran",
		IRL: "Ireland",
		IRQ: "Iraq",
		ISL: "Iceland",
		ISR: "Israel",
		ISV: "Virgin Islands",
		ITA: "Italy",
		IVB: "British Virgin Islands",
		JAM: "Jamaica",
		JOR: "Jordan",
		JPN: "Japan",
		KAZ: "Kazakhstan",
		KEN: "Kenya",
		KGZ: "Kyrgyzstan",
		KIR: "Kiribati",
		KOR: "South Korea",
		KOS: "Kosovo",
		KSA: "Saudi Arabia",
		KUW: "Kuwait",
		LAO: "Laos",
		LAT: "Latvia",
		LBA: "Libya",
		LBR: "Liberia",
		LCA: "Saint Lucia",
		LES: "Lesotho",
		LIB: "Lebanon",
		LIE: "Liechtenstein",
		LTU: "Lithuania",
		LUX: "Luxembourg",
		MAD: "Madagascar",
		MAR: "Morocco",
		MAS: "Malaysia",
		MAW: "Malawi",
		MDA: "Moldova",
		MDV: "Maldives",
		MEX: "Mexico",
		MGL: "Mongolia",
		MHL: "Marshall Islands",
		MKD: "Macedonia",
		MLI: "Mali",
		MLT: "Malta",
		MNE: "Montenegro",
		MON: "Monaco",
		MOZ: "Mozambique",
		MRI: "Mauritius",
		MTN: "Mauritania",
		MYA: "Myanmar",
		NAM: "Namibia",
		NCA: "Nicaragua",
		NED: "Netherlands",
		NEP: "Nepal",
		NGR: "Nigeria",
		NIG: "Niger",
		NOR: "Norway",
		NRU: "Nauru",
		NZL: "New Zealand",
		OMA: "Oman",
		PAK: "Pakistan",
		PAN: "Panama",
		PAR: "Paraguay",
		PER: "Peru",
		PHI: "Philippines",
		PLE: "Palestine",
		PLW: "Palau",
		PNG: "Papua New Guinea",
		POL: "Poland",
		POR: "Portugal",
		PRK: "North Korea",
		PUR: "Puerto Rico",
		QAT: "Qatar",
		ROU: "Romania",
		RSA: "South Africa",
		RUS: "Russia",
		RWA: "Rwanda",
		SAM: "Samoa",
		SEN: "Senegal",
		SEY: "Seychelles",
		SIN: "Singapore",
		SKN: "Saint Kitts and Nevis",
		SLE: "Sierra Leone",
		SLO: "Slovenia",
		SMR: "San Marino",
		SOL: "Solomon Islands",
		SOM: "Somalia",
		SRB: "Serbia",
		SRI: "Sri Lanka",
		SSD: "South Sudan",
		STP: "Sao Tome and Principe",
		SUD: "Sudan",
		SUI: "Switzerland",
		SUR: "Suriname",
		SVK: "Slovakia",
		SWE: "Sweden",
		SWZ: "Swaziland",
		SYR: "Syria",
		TAN: "Tanzania",
		TGA: "Tonga",
		THA: "Thailand",
		TJK: "Tajikistan",
		TKM: "Turkmenistan",
		TLS: "Timor-Leste",
		TOG: "Togo",
		TPE: "Chinese Taipei",
		TTO: "Trinidad and Tobago",
		TUN: "Tunisia",
		TUR: "Turkey",
		TUV: "Tuvalu",
		UAE: "United Arab Emirates",
		UGA: "Uganda",
		UKR: "Ukraine",
		URU: "Uruguay",
		USA: "United States",
		UZB: "Uzbekistan",
		VAN: "Vanuatu",
		VEN: "Venezuela",
		VIE: "Vietnam",
		VIN: "Saint Vincent and the Grenadines",
		YEM: "Yemen",
		ZAM: "Zambia",
		ZAN: "Zanzibar",
		ZIM: "Zimbabwe"
		}
	var out = "<select><option rel=''>Country</option>";
	for (var key in countries) {
		out += "<option rel='" + key + "'>" + countries[key] + "</option>";
	}
	out += "</select>";

	document.getElementById(container).innerHTML = out;
}
countriesDropdown("countries");





function pincodeDropdown(containernew){
	var pincode = {
		AFG: "+93",
		ALB: "+355",
		ALG: "+213",
		AND: "+376",
		ANG: "+244",
		ANT: "+1-268",
		ARG: "+54",
		ARM: "+374",
		ARU: "+297",
		ASA: "+1-684",
		AUS: "+61",
		AUT: "+43",
		AZE: "+994",
		BAH: "+1-242",
		BAN: "+880",
		BAR: "+1-246",
		BDI: "+257",
		BEL: "+32",
		BEN: "+	229",
		BER: "+1-441",
		BHU: "+975",
		BIH: "+387",
		BIZ: "+501",
		BLR: "+375",
		BOL: "+591",
		BOT: "+267",
		BRA: "+55",
		BRN: "+973",
		BRU: "+673",
		BUL: "+359",
		BUR: "+226",
		CAF: "236",
		CAM: "+855",
		CAN: "+1",
		CAY: "+1-345",
		CGO: "+242",
		CHA: "+235",
		CHI: "+56",
		CHN: "+86",
		CIV: "Cote d'Ivoire",
		CMR: "+237",
		COD: "+243",
		COK: "+682",
		COL: "+57",
		COM: "+269",
		CPV: "+238",
		CRC: "+506",
		CRO: "+385",
		CUB: "+53",
		CYP: "+357",
		CZE: "+420",
		DEN: "+45",
		DJI: "+253",
		DMA: "+1 767",
		DOM: "+1 809",
		ECU: "+593",
		EGY: "+20",
		ERI: "+291",
		ESA: "+503",
		ESP: "+34",
		EST: "+372",
		ETH: "+251",
		FIJ: "+679",
		FIN: "+358",
		FRA: "+33",
		FSM: "+691",
		GAB: "+241",
		GAM: "+220",
		GBR: "+44",
		GBS: "+245",
		GEO: "+995",
		GEQ: "+240",
		GER: "+49",
		GHA: "+233",
		GRE: "+30",
		GRN: "+1 473",
		GUA: "+502",
		GUI: "+224",
		GUM: "+1 671",
		GUY: "+592",
		HAI: "+509",
		HKG: "+852",
		HON: "+504",
		HUN: "+36",
		INA: "+62",
		IND: "+91",
		IRI: "+98",
		IRL: "+353",
		IRQ: "+964",
		ISL: "+354",
		ISR: "+972",
		ISV: "+00 1",
		ITA: "+39",
		IVB: "+1 284",
		JAM: "+1 876",
		JOR: "+962",
		JPN: "+81",
		KAZ: "+7 6",
		KEN: "+254",
		KGZ: "+996",
		KIR: "+686",
		KOR: "+82",
		KOS: "+383",
		KSA: "+966",
		KUW: "+965",
		LAO: "+856",
		LAT: "+371",
		LBA: "+218",
		LBR: "+231",
		LCA: "+1 758",
		LES: "+266",
		LIB: "+961",
		LIE: "+423",
		LTU: "+370",
		LUX: "+352",
		MAD: "+261",
		MAR: "+212",
		MAS: "+60",
		MAW: "+265",
		MDA: "+373",
		MDV: "+960",
		MEX: "+52",
		MGL: "+976",
		MHL: "+692",
		MKD: "+389",
		MLI: "+223",
		MLT: "+356",
		MNE: "+382",
		MON: "+377",
		MOZ: "+258",
		MRI: "+230",
		MTN: "+222",
		MYA: "+95",
		NAM: "+264",
		NCA: "+505",
		NED: "+31",
		NEP: "+977",
		NGR: "+234",
		NIG: "+227",
		NOR: "+47",
		NRU: "+674",
		NZL: "+64",
		OMA: "+968",
		PAK: "+92",
		PAN: "+507",
		PAR: "+595",
		PER: "+51",
		PHI: "+63",
		PLE: "+970",
		PLW: "+680",
		PNG: "+675",
		POL: "+48",
		POR: "+351",
		PRK: "+850",
		PUR: "+1 787",
		QAT: "+974",
		ROU: "+40",
		RSA: "+27",
		RUS: "+7",
		RWA: "+250",
		SAM: "+685",
		SEN: "+221",
		SEY: "+248",
		SIN: "+65",
		SKN: "+1 869",
		SLE: "+232",
		SLO: "+386",
		SMR: "+378",
		SOL: "+677",
		SOM: "+252",
		SRB: "+381",
		SRI: "+94",
		SSD: "+211",
		STP: "+239",
		SUD: "+249",
		SUI: "+41",
		SUR: "+597",
		SVK: "+421",
		SWE: "+46",
		SWZ: "+268",
		SYR: "+963",
		TAN: "+255",
		TGA: "+676",
		THA: "+66",
		TJK: "+992",
		TKM: "+993",
		TLS: "+670",
		TOG: "+228",
		TPE: "+886",
		TTO: "+1 868",
		TUN: "+216",
		TUR: "+90",
		TUV: "+688",
		UAE: "+971",
		UGA: "+256",
		UKR: "+380",
		URU: "+598",
		USA: "+1",
		UZB: "+998",
		VAN: "+678",
		VEN: "+58",
		VIE: "+84",
		VIN: "+1 784",
		YEM: "+967",
		ZAM: "+260",
		ZAN: "+255 24",
		ZIM: "+263"
		}
	var pinout = "<select><option class=''>Pin</option>";
	for (var i in pincode) {
		pinout += "<option class='" + i + "'>" + pincode[i] + "</option>";
	}
	pinout += "</select>";

	document.getElementById(containernew).innerHTML = pinout;
}

pincodeDropdown("pincode");


jQuery("#myForm").validate({
  errorLabelContainer: "#messageBox",
  wrapper: "li",
  submitHandler: function() { alert("Submitted!") }
});






