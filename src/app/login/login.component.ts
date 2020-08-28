import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	userName = new FormControl('',[Validators.required]);
	password = new FormControl('',[Validators.required]);
	constructor(private router : Router) { }

	ngOnInit(): void {
	}

	login(event){
		if(event.target.querySelector("#username").value == "Admin" && 
			event.target.querySelector("#password").value == "Admin"){
			this.router.navigateByUrl('menu');
		}else{
			window.alert("Incorrect username or password");
			this.userName.reset("");
			this.password.reset("");
		}
	}

}
