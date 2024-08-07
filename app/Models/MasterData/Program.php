<?php

namespace App\Models\MasterData;

use App\Traits\Uuid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Program extends Model
{
    use HasFactory, Uuid;

    public $incrementing = false;

    protected $keyType = 'string';

    public function program_type()
    {
        return $this->belongsTo(\App\Models\MasterData\ProgramType::class);
    }
    
}
