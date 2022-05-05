<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('projects', function (Blueprint $table) {
			$table->id();
			$table->mediumText('title')->nullable(false);
			$table->tinyText('thumbnail');
			$table->foreignId('category_id')->constrained();
			$table->foreignId('user_id')->constrained();
			$table->mediumText('tags');
			$table->longText('description');
			$table->float('rate')->nullable();
			$table->enum('status', ['pending', 'canceled', 'approved', 'rejected'])->default('pending');
			$table->tinyText('demo')->nullable();
			$table->bigInteger('views')->default(0);
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('projects');
	}
};
