<?php


namespace App\Http\Controllers;


use Inertia\Inertia;

class WelcomeController
{
    public function index()
    {
        return Inertia::render('Index');
    }
}
