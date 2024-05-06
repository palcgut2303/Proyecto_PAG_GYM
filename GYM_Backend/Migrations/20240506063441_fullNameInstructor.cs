using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace GYM_Backend.Migrations
{
    /// <inheritdoc />
    public partial class fullNameInstructor : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "17abf164-0d98-4489-8c68-c20a9c8d9406");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "944f50ae-2474-46d4-982d-4b1ba1c2d1f7");

            migrationBuilder.DropColumn(
                name: "Speciality",
                table: "GymInstructors");

            migrationBuilder.AddColumn<string>(
                name: "FullName",
                table: "AspNetUsers",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "73c73537-3ad7-42ea-a347-c9b1ebb7fdc4", null, "Instructor", "INSTRUCTOR" },
                    { "fbbc06d5-4645-4087-9a82-ea5c0d7d570a", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "73c73537-3ad7-42ea-a347-c9b1ebb7fdc4");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fbbc06d5-4645-4087-9a82-ea5c0d7d570a");

            migrationBuilder.DropColumn(
                name: "FullName",
                table: "AspNetUsers");

            migrationBuilder.AddColumn<string>(
                name: "Speciality",
                table: "GymInstructors",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "17abf164-0d98-4489-8c68-c20a9c8d9406", null, "User", "USER" },
                    { "944f50ae-2474-46d4-982d-4b1ba1c2d1f7", null, "Instructor", "INSTRUCTOR" }
                });
        }
    }
}
