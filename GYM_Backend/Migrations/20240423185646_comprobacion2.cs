using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace GYM_Backend.Migrations
{
    /// <inheritdoc />
    public partial class comprobacion2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "a1fe2c95-3e80-4980-9636-aee27edbf5cb");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "accfbcc7-bc13-472c-adf4-9ac750050215");

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "GymMembers",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "UserId",
                table: "GymInstructors",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "5f7795fb-61cc-405d-b919-b86c97a5fa92", null, "User", "USER" },
                    { "7bed2455-5692-4def-b0f6-1d05d960285d", null, "Instructor", "INSTRUCTOR" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_GymMembers_UserId",
                table: "GymMembers",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_GymInstructors_UserId",
                table: "GymInstructors",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_GymInstructors_AspNetUsers_UserId",
                table: "GymInstructors",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_GymMembers_AspNetUsers_UserId",
                table: "GymMembers",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_GymInstructors_AspNetUsers_UserId",
                table: "GymInstructors");

            migrationBuilder.DropForeignKey(
                name: "FK_GymMembers_AspNetUsers_UserId",
                table: "GymMembers");

            migrationBuilder.DropIndex(
                name: "IX_GymMembers_UserId",
                table: "GymMembers");

            migrationBuilder.DropIndex(
                name: "IX_GymInstructors_UserId",
                table: "GymInstructors");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5f7795fb-61cc-405d-b919-b86c97a5fa92");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7bed2455-5692-4def-b0f6-1d05d960285d");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "GymMembers");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "GymInstructors");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "a1fe2c95-3e80-4980-9636-aee27edbf5cb", null, "Instructor", "INSTRUCTOR" },
                    { "accfbcc7-bc13-472c-adf4-9ac750050215", null, "User", "USER" }
                });
        }
    }
}
