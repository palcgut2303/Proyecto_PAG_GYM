using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace GYM_Backend.Migrations
{
    /// <inheritdoc />
    public partial class commit4 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Classes_GymInstructors_GymInstructorId",
                table: "Classes");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_GymMembers_GymMemberId",
                table: "Reservations");

            migrationBuilder.DropTable(
                name: "GymInstructors");

            migrationBuilder.DropTable(
                name: "GymMembers");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "9143ee97-699e-4e22-8df1-0092feb4f298");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "b190099b-5d6b-4194-b95e-e279048bdd90");

            migrationBuilder.AlterColumn<string>(
                name: "GymMemberId",
                table: "Reservations",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AlterColumn<string>(
                name: "GymInstructorId",
                table: "Classes",
                type: "nvarchar(450)",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddColumn<DateTime>(
                name: "EndDate",
                table: "AspNetUsers",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "JoinDate",
                table: "AspNetUsers",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Speciality",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "8cee8472-f14d-433a-8261-0018479daf0b", null, "Instructor", "INSTRUCTOR" },
                    { "a0e2bda6-2f15-4f77-b3c5-60c7a694916b", null, "User", "USER" }
                });

            migrationBuilder.AddForeignKey(
                name: "FK_Classes_AspNetUsers_GymInstructorId",
                table: "Classes",
                column: "GymInstructorId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_AspNetUsers_GymMemberId",
                table: "Reservations",
                column: "GymMemberId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Classes_AspNetUsers_GymInstructorId",
                table: "Classes");

            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_AspNetUsers_GymMemberId",
                table: "Reservations");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "8cee8472-f14d-433a-8261-0018479daf0b");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a0e2bda6-2f15-4f77-b3c5-60c7a694916b");

            migrationBuilder.DropColumn(
                name: "EndDate",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "JoinDate",
                table: "AspNetUsers");

            migrationBuilder.DropColumn(
                name: "Speciality",
                table: "AspNetUsers");

            migrationBuilder.AlterColumn<int>(
                name: "GymMemberId",
                table: "Reservations",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.AlterColumn<int>(
                name: "GymInstructorId",
                table: "Classes",
                type: "int",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(450)");

            migrationBuilder.CreateTable(
                name: "GymInstructors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Specialty = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GymInstructors", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GymInstructors_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "GymMembers",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime2", nullable: true),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    JoinDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_GymMembers", x => x.Id);
                    table.ForeignKey(
                        name: "FK_GymMembers_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "9143ee97-699e-4e22-8df1-0092feb4f298", null, "Instructor", "INSTRUCTOR" },
                    { "b190099b-5d6b-4194-b95e-e279048bdd90", null, "User", "USER" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_GymInstructors_UserId",
                table: "GymInstructors",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_GymMembers_UserId",
                table: "GymMembers",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Classes_GymInstructors_GymInstructorId",
                table: "Classes",
                column: "GymInstructorId",
                principalTable: "GymInstructors",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_GymMembers_GymMemberId",
                table: "Reservations",
                column: "GymMemberId",
                principalTable: "GymMembers",
                principalColumn: "Id");
        }
    }
}
