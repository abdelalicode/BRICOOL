<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;


class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $job_permissions = [
            $job_list = Permission::firstOrCreate(['name' => 'jobs.list']),
            $job_view = Permission::firstOrCreate(['name' => 'jobs.view']),
            $job_create = Permission::firstOrCreate(['name' => 'jobs.create']),
            $job_update = Permission::firstOrCreate(['name' => 'jobs.update']),
            $job_delete = Permission::firstOrCreate(['name' => 'jobs.delete'])
        ];

        $admin_role = Role::firstOrCreate(['name' => 'admin']);
        $worker_role = Role::firstOrCreate(['name' => 'worker']);


        $admin_role->givePermissionTo($job_permissions);
        $worker_role->givePermissionTo([
            $job_list,
            $job_view
        ]);

        $admin = User::create([
            'firstname' => 'Abdelali',
            'lastname' => 'TAHA',
            'email' => 'abdelali@gmail.com',
            'password' => Hash::make('123456789'),
            'username' => 'admin'
        ]);

        $admin->assignRole($admin_role);
        $admin->givePermissionTo($job_permissions);

        $worker = User::create([
            'firstname' => 'Abdellah',
            'lastname' => 'Lamine',
            'email' => 'abdellah@gmail.com',
            'password' => Hash::make('123456789'),
            'username' => 'admin'
        ]);

        $worker->assignRole($worker_role);
        $worker->givePermissionTo([
            $job_list,
            
        ]);
    }
}
