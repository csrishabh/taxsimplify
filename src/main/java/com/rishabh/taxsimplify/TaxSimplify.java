package com.rishabh.taxsimplify;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan("com.kaushal.springboot")
public class TaxSimplify {

	public static void main(String[] args) {
		SpringApplication.run(TaxSimplify.class, args);
	}
}
