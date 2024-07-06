<?php

namespace App\Models\MasterData;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProgramType extends Model
{
    use HasFactory, Uuid;

    public $incrementing = false;

    protected $keyType = 'string';
}
