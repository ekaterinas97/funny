<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FunnyLandingController extends Controller
{
    public function index()
    {
        return Inertia::render('MainPage/MainPage');
    }
}
